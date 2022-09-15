# Capstone Planning Log

**ALL TIMES ARE IN PST**

- **2022-09-15 10:30 AM**: Research on how to use AutoHotKey
- **2022-09-15 10:50 AM**: Write a script for typing time stamp
- **2022-09-15 11:16 AM**: Complete the refactoring of the auto scrip.
  ```
  ^!s::
  FormatTime, CurrentDateTime, A_NowUTC, yyyy-MM-dd HH:mm tt
  SendInput - **%CurrentDateTime%**:
  return
  ```
