import React from "react";
import styles from "./Section.module.css";
import propType from 'prop-types';
function Section({ title, children }) {

    return (
      <section>
        <h1 className={styles.titleStat}>{title}</h1>
        {children}
      </section>
    );
}
Section.propType = {
  title: propType.string,
}

export default Section;