import styles from "./LinkButton.module.scss";

const LinkButton = ({ children, isActive, ...props }) => {
  const className = isActive
    ? `${styles.linkButton} ${styles.active}`
    : styles.linkButton;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default LinkButton;
