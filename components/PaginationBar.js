import Link from "next/link";
import {Pagination} from "react-bootstrap";
import React from "react";

export default function PaginationBar({base,page,pages}){
    return(
        <Pagination className="mt-3">
            <Pagination.First
                disabled = {page === 1 }
                href = {base}
            />
            <Pagination.Prev
                disabled = {page === 1}
                href = {
                    page === 2
                    ? `${base}`
                    : `${base}/${page - 1}`
                }
            />
            <Pagination.Item>
                {page} of {pages}
            </Pagination.Item>
            <Link href={`${base}/${page + 1}`} passHref>
                <Pagination.Next
                    disabled = {page === pages}
                    href = {`${base}/${page + 1}`}
                />
            </Link>
            <Pagination.Last
                disabled = {page === pages}
                href = {`${base}/${pages}`}
            />
        </Pagination>
    )
}