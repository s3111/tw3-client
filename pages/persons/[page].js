import {useEffect, useState} from "react"
import {useRouter} from "next/router";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import {Pagination} from "react-bootstrap";
const Persons = ({users}) => {
    const {query} = useRouter()

    let page = parseInt(query.page)
    let limit = 20
    const pageCount = Math.ceil(users.count / limit)
    return (
        <MainContainer>
            <h1>Persons</h1>
            <Pagination className="mt-3">
                <Pagination.First
                    disabled = {page === 1 }
                    href = {"/persons"}
                    //onClick={() => servers.setPage(1)}
                />
                <Pagination.Prev
                    disabled = {page === 1}
                    //onClick={() => servers.setPage(servers.page-1)}
                    href = {`/persons/${page - 1}`}
                />
                <Pagination.Item
                    //active={true}
                    //disabled = {disabled}
                >
                    {page} of {pageCount}
                </Pagination.Item>
                <Pagination.Next
                    disabled = {page === pageCount}
                    //onClick={() => servers.setPage(servers.page+1)}
                    href = {`/persons/${page + 1}`}
                />
                <Pagination.Last
                    disabled = {page === pageCount}
                    //onClick={() => servers.setPage(pageCount)}
                    href = {`/persons/${pageCount}`}
                />
            </Pagination>
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