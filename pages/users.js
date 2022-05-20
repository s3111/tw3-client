import {useEffect, useState} from "react"
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({users}) => {
    return (
        <MainContainer>
            <h1>users</h1>
            <ul>
                {users.map(user =>
                    <li key={user.user_id}>
                        <Link href={`/users/${user.screen_name}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context){
    const response = await fetch('https://ukraine.web2ua.com/api/person/?searchType=List&name=&page=1&limit=30')
    const data = await response.json()
    const users = data.rows
    return{
        props: {users}
    }
}