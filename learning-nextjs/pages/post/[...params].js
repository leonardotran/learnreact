import { useRouter } from 'next/router';
import style from '../../styles/Post.module.css';


export default function Post() {
    const router = useRouter();
    const params = router.query;
    console.log(params);
    return (
        <h1 className={style.title}>
            This is post page !
        </h1>
    )
}