import styles from '../styles/Post.module.css'

export default function Comment({ comment }){
  const { email, name, body } = comment;
  return (
    <li className={styles.comment}>
      <h4>{name}</h4>
      <p style={{display: 'inline'}}>{body}</p>
      <span>
        <a
          href={`mailto:${email}`}
          aria-label={`${email}`}
          title="send email"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope" style={{marginLeft: '90%'}}></i>
        </a>
      </span>
    </li>
  )
};