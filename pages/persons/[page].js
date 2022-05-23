import {useEffect, useState} from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
const Persons = ({users}) => {
    const {query} = useRouter()
    return (
        <MainContainer>
            <h1>Persons</h1>
            <ul>
                {users.rows.map(user =>
                    <li key={user.user_id}>
                        <Link href={`/person/${user.screen_name}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Persons;

export async function getServerSideProps({params}){
    let page = params.page ?? 1
    //let limit = params.limit ?? 20
    console.log(params)
    //let page = 1
    let limit = 20
    const response = await fetch(`https://ukraine.web2ua.com/api/person/?searchType=List&page=${page}&limit=${limit}`)
    const data = await response.json()
    const users = data
    return{
        props: {users}
    }
}