import styles from './AuthSkeleton.module.css'

const AuthSkeleton = () => {
  const text = 'B o d y L i n k'.split('')

  return (
    <div className={styles['loading-container']}>
      <h1 className={styles['loading-text']}>
        {text.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
    </div>
  )
}

export default AuthSkeleton
