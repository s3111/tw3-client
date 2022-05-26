import Link from "next/link";
import {Pagination} from "react-bootstrap";
import React from "react";

export default function PaginationBar({base,page,pages}){
    return(
        <Pagination className="mt-3">
            <Link href = {base} passHref>
                <Pagination.First
                    disabled = {page === 1 }
                />
            </Link>
            <Link href = {
                page === 2
                    ? `${base}`
                    : `${base}/${page - 1}`
            } passHref>
                <Pagination.Prev
                    disabled = {page === 1}
                />
            </Link>
            <Pagination.Item>
                {page} of {pages}
            </Pagination.Item>
            <Link href={`${base}/${page + 1}`} passHref>
                <Pagination.Next
                    disabled = {page === pages}
                />
            </Link>
            <Link href = {`${base}/${pages}`} passHref>
                <Pagination.Last
                    disabled = {page === pages}
                />
            </Link>
        </Pagination>
    )
}