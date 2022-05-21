import {useRouter} from "next/router";
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer";
export default function User(user){
    const {query} = useRouter()
    console.log(user)
    return(
        <MainContainer>
            <div className={styles.user}>
                <h1>user {query.id}</h1>
                <div>name: {user.name}</div>
                <div>screen: {user.screen_name}</div>
            </div>
        </MainContainer>
    )
}
export async function getServerSideProps({params}){
    const response = await fetch(`https://ukraine.web2ua.com/api/person/${params.id}?searchType=All`)
    const user = await response.json()
    console.log(user)
    //const users = data.rows
    return{
        props: user
    }
}