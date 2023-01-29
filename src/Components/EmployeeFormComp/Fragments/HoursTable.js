import React, { useState, useEffect } from "react";
import styles from "./HoursTable.module.css";

function HoursTable({ setFieldValue }) {
  const [dateHours, setDateHours] = useState([]);

  useEffect(() => {
    setFieldValue("dayDateHoursTable", dateHours);

    // eslint-disable-next-line
  }, [dateHours]);

  const getDateinFormat = (dateString) => {
    let yyyy = dateString.getFullYear();
    let mm = dateString.getMonth() + 1;
    let dd = dateString.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedDate = yyyy + "-" + mm + "-" + dd;

    return formattedDate;
  };

  function addDays(originalDate, days) {
    let cloneDate = new Date(originalDate.valueOf());
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  }

  const handleDateInput = (e) => {
    let inp = new Date(e.target.value);

    const dates = [];
    setDateHours([]);

    for (let i = 0; i <= 13; i++) {
      dates.push(addDays(inp, i));
    }
    // console.log(dates.length);
    // console.log(dates);

    dates.forEach((str) => {
      let dateInFormat = getDateinFormat(str);
      // console.log(dateInFormat);
      setDateHours((prev) => [
        ...prev,
        { day: prev.length + 1, date: dateInFormat, hours: "" },
      ]);
    });
  };

  const handleHoursInput = (entry, value, id) => {
    if (entry.day === id) {
      return { ...entry, hours: value };
    }
    return entry;
  };

  return (
    <div className={styles.tableContainer}>
      <table style={{ width: "100%", height: "100%" }}>
        <thead>
          <tr className={styles.headerContainer}>
            <td style={{ width: "15%" }} className={styles.label}>
              Day
            </td>
            <td className={styles.label}>Date</td>
            <td className={styles.label}>Hours</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <input
                className={styles.input}
                type="date"
                onChange={handleDateInput}
              />
            </td>
            <td>
              <input
                className={styles.input}
                value={dateHours.length !== 0 ? dateHours[0].hours : null}
                disabled={dateHours.length === 0 ? true : false}
                onChange={(e) => {
                  let value = e.target.value;
                  setDateHours(
                    dateHours.map((entry) => handleHoursInput(entry, value, 1))
                  );
                }}
              />
            </td>
          </tr>
          {dateHours.length !== 0
            ? dateHours.map((dtHour) => {
                return dtHour.day === 1 ? null : (
                  <tr key={dtHour.day}>
                    <td>{dtHour.day}</td>
                    <td>
                      <input
                        className={styles.input}
                        type="date"
                        disabled
                        value={dtHour.date}
                      />
                    </td>
                    <td>
                      <input
                        className={styles.input}
                        value={dtHour.hours}
                        onChange={(e) => {
                          let value = e.target.value;
                          setDateHours(
                            dateHours.map((entry) =>
                              handleHoursInput(entry, value, dtHour.day)
                            )
                          );
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default HoursTable;
