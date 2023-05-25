import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import styles from './SortableCard.module.scss';

function SortableCard({ children, ...props }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const cardClass = classNames(styles.card, {
    [styles.active]: isDragging,
  });

  return (
    <div className={cardClass} style={style} ref={setNodeRef} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export default SortableCard;
