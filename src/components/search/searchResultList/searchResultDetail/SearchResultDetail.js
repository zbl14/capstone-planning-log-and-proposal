import React, { useEffect, useState } from "react";
import ReviewList from "./reviewList/ReviewList";
import NewReviewForm from "./reviewList/NewReviewForm";
import ReviewDetail from "./reviewList/ReviewDetail";
import EditReviewForm from "./reviewList/EditReviewForm";
import { db, auth } from "./../../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  increment,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import ListAltIcon from "@mui/icons-material/ListAlt";

const SearchResultDetail = (props) => {
  const { business } = props;
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainReviewList, setMainReviewList] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function updateReviewElapsedWaitTime() {
      const newMainReviewList = mainReviewList.map((review) => {
        const newFormattedWaitTime = formatDistanceToNow(review.timeOpen);
        return { ...review, formattedWaitTime: newFormattedWaitTime };
      });
      setMainReviewList(newMainReviewList);
    }

    const waitTimeUpdateTimer = setInterval(
      () => updateReviewElapsedWaitTime(),
      60000
    );

    return () => {
      clearInterval(waitTimeUpdateTimer);
    };
  }, [mainReviewList]);

  useEffect(() => {
    const queryByBusinessIdByTimestamp = query(
      collection(db, "reviews"),
      where("businessId", "==", business.id),
      orderBy("timeOpen")
    );
    const unSubscribe = onSnapshot(
      queryByBusinessIdByTimestamp,
      (querySnapshot) => {
        const reviews = querySnapshot.docs.map((doc) => {
          const timeOpen = doc
            .get("timeOpen", { serverTimestamps: "estimate" })
            .toDate();
          const jsDate = new Date(timeOpen);
          return {
            ...doc.data(),
            timeOpen: jsDate,
            formattedWaitTime: formatDistanceToNow(jsDate, {
              addSuffix: true,
            }),
            id: doc.id,
          };
        });
        setMainReviewList(reviews);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, [business.id]);

  const handleClick = () => {
    if (selectedReview != null) {
      setFormVisibleOnPage(false);
      setSelectedReview(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleAddingNewReviewToList = async (newReview) => {
    await addDoc(collection(db, "reviews"), newReview);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedReview = (id) => {
    const selection = mainReviewList.filter((review) => review.id === id)[0];
    setSelectedReview(selection);
  };

  const handleDeletingReview = async (id) => {
    await deleteDoc(doc(db, "reviews", id));
    setSelectedReview(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingReview = async (reviewToEdit) => {
    await updateDoc(doc(db, "reviews", reviewToEdit.id), reviewToEdit);
    setEditing(false);
    setSelectedReview(null);
  };

  const handleUpvote = async (id) => {
    await updateDoc(doc(db, "reviews", id), {
      voteCount: increment(1),
    });
    setSelectedReview({
      ...selectedReview,
      voteCount: selectedReview.voteCount + 1,
    });
  };

  const handleDownvote = async (id) => {
    await updateDoc(doc(db, "reviews", id), {
      voteCount: increment(-1),
    });
    setSelectedReview({
      ...selectedReview,
      voteCount: selectedReview.voteCount - 1,
    });
  };

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the reviews.</h1>
      </React.Fragment>
    );
  } else if (auth.currentUser != null) {
    let curVisibleState = null;
    let buttonText = null;
    let button = null;

    if (error) {
      curVisibleState = <p>There was an error: {error}</p>;
    } else if (editing) {
      curVisibleState = (
        <EditReviewForm
          review={selectedReview}
          onEditReview={handleEditingReview}
        />
      );
      buttonText = "Return to Review List";
      button = <ListAltIcon fontSize="large" />;
    } else if (selectedReview != null) {
      curVisibleState = (
        <ReviewDetail
          review={selectedReview}
          onClickingDelete={handleDeletingReview}
          onClickingEdit={handleEditClick}
          onClickingUpvote={handleUpvote}
          onClickingDownvote={handleDownvote}
        />
      );
      buttonText = "Return to Review List";
    } else if (formVisibleOnPage) {
      curVisibleState = (
        <NewReviewForm
          onNewReviewCreation={handleAddingNewReviewToList}
          business={business}
        />
      );
      buttonText = "Return to Review List";
      button = <ListAltIcon fontSize="large" />;
    } else {
      curVisibleState = (
        <ReviewList
          reviewList={mainReviewList}
          onReviewSelection={handleChangingSelectedReview}
        />
      );
      buttonText = "New Review";
      button = <CreateIcon fontSize="large" />;
    }

    return (
      <React.Fragment>
        <Container>
          <h1>Reviews of {business.name}</h1>
          {curVisibleState}
          <Button
            onClick={handleClick}
            title={buttonText}
            // style={{ border: "none", padding: "0", background: "none" }}
          >
            {button}
          </Button>
        </Container>
      </React.Fragment>
    );
  }
};

export default SearchResultDetail;
