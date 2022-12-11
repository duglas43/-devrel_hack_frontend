import React from "react";
import styles from "./FilterBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setSortBy,
  setLanguage,
  setPage,
} from "../../redux/slices/filterSlice";
const sortList = [
  { type: "stars", name: "По количеству звезд" },
  { type: "commits", name: "По количеству коммитов" },
  { type: "prs", name: "По количеству PullRequests" },
  { type: "issues", name: "По количеству Issues" },
  { type: "contribs", name: "По количеству проектов" },
];
const langsList = [
  "C",
  "C++",
  "C#",
  "Go",
  "Java",
  "JavaScript",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "TypeScript",
];
function FilterBar() {
  const dispatch = useDispatch();
  const { sortBy, langs } = useSelector(selectFilter);

  const [sortByOpen, setSortByOpen] = React.useState(false);
  const [sortOpen, setSortOpen] = React.useState(true);
  const [filterOpen, setFilterOpen] = React.useState(true);

  const onSortClick = (type) => {
    dispatch(setPage(0));
    dispatch(setSortBy(type));
  };
  const onLanguageClick = (language) => {
    dispatch(setPage(0));
    dispatch(setLanguage(language));
  };
  return (
    <div>
      <div className={`${styles.filter} px-3`}>
        <div className={`${styles.filter__head}`}>
          <div className={`${styles.filter__title}`}>Сортировка</div>
          <div
            onClick={() => setSortOpen((prev) => !prev)}
            className={`${styles.filter__arrow}`}
          >
            <i
              className={`bx bx-chevron-down ${
                sortOpen ? "" : "bx-rotate-270"
              }`}
            ></i>
          </div>
        </div>
        <form className={`${styles.py12} ${sortOpen ? styles.active : ""} `}>
          <p className={`mb-2 ${styles.title}`}>Сортировать по:</p>
          <div
            onClick={() => setSortByOpen((prev) => !prev)}
            className={`${styles.select__wrapper} px-3 border`}
          >
            <div className={`${styles.select} ${styles.title}`}>
              {sortList.find((item) => item.type === sortBy).name}
            </div>
            <ul
              className={`${styles.select__list} ${
                sortByOpen ? styles.active : ""
              } p-0 border ${styles.title}`}
            >
              {sortList.map((item) => (
                <li
                  key={item.type}
                  onClick={() => {
                    onSortClick(item.type);
                  }}
                  className={`${styles.select__item}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className={`${styles.select__arrow}`}>
              <i
                className={`bx bx-chevron-down ${
                  sortByOpen ? "bx-rotate-180" : ""
                }`}
              ></i>
            </div>
          </div>
        </form>
      </div>

      <div className={`${styles.filter} px-3 mt-4 `}>
        <div className={`${styles.filter__head}`}>
          <div className={`${styles.filter__title}`}>Фильтрация</div>
          <div
            onClick={() => setFilterOpen((prev) => !prev)}
            className={`${styles.filter__arrow}`}
          >
            <i
              className={`bx bx-chevron-down ${
                filterOpen ? "" : "bx-rotate-270"
              }`}
            ></i>
          </div>
        </div>

        <div className={`${styles.py12} ${filterOpen ? styles.active : ""} `}>
          <p className={`mb-2 ${styles.title} pb-2`}>Языки программирования:</p>
          <div className={`mb-2 ${styles["genres-list"]}`}>
            {langsList.map((item) => (
              <div
                className={`tag tag--outlined rounded-5 py-2 px-3 me-2 mb-2 ${
                  styles.tag
                } ${langs.includes(item) ? styles.active : ""}`}
                key={item}
                role="button"
                onClick={() => {
                  onLanguageClick(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
