import Link from "next/link";
import styles from "../styles/A.module.css"
import {Pagination} from "react-bootstrap";
import React from "react";


export default function PaginationBar({base,page,pages}){
    return(
        <Pagination className="mt-3">
            <Pagination.First
                disabled = {page === 1 }
                href = {base}
                //onClick={() => servers.setPage(1)}
            />
            <Pagination.Prev
                disabled = {page === 1}
                //onClick={() => servers.setPage(servers.page-1)}
                href = {`${base}/${page - 1}`}
            />
            <Pagination.Item
                //active={true}
                //disabled = {disabled}
            >
                {page} of {pages}
            </Pagination.Item>
            <Pagination.Next
                disabled = {page === pages}
                //onClick={() => servers.setPage(servers.page+1)}
                href = {`${base}/${page + 1}`}
            />
            <Pagination.Last
                disabled = {page === pages}
                //onClick={() => servers.setPage(pageCount)}
                href = {`${base}/${pages}`}
            />
        </Pagination>
    )
}