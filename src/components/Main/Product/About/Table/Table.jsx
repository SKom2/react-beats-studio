import styles from './Table.module.scss';

const tableData = [
  {
    row: 1,
    heading: 'Earbuds',
  },
  {
    row: 2,
    title: 'Weight:',
    text: '5 g',
  },
  {
    row: 3,
    title: 'Height:',
    text: '0.59 in / 1.5 cm',
  },
  {
    row: 4,
    heading: 'Case:',
  },
  {
    row: 5,
    title: 'Height:',
    text: '1 in / 2.55 cm',
  },
  {
    row: 6,
    title: 'Weight:',
    text: '48 g',
  },
  {
    row: 7,
    title: 'Length:',
    text: '2.83 in / 7.2 cm',
  },
  {
    row: 8,
    title: 'Width:',
    text: '2 in / 5.1 cm',
  },
];

const Table = () => {
  return (
    <table className={styles.table}>
      <tbody className={styles.table__body}>
        {tableData.map((row) => (
          <tr className={styles.table__row} key={row.row}>
            <td
              className={`${styles.table__column} ${row.heading ? styles.table__columnHeading : styles.table__columnTitle}`}
            >
              {row.title || row.heading}
            </td>
            {row.text && (
              <td
                className={`${styles.table__column} ${styles.table__columnText}`}
              >
                {row.text}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
