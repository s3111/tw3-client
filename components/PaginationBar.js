import Link from "next/link";
import {Pagination} from "react-bootstrap";
import React from "react";

export default function PaginationBar({base, page, pages, query}) {
    let queryAdd = ''
    if (query) {
        if (Object.keys(query).length) {
            let q = {}
            Object.keys(query).map(k => {
                if (
                    k === 'verified' ||
                    k === 'order'
                ) q[k] = query[k]
            })
            if (Object.keys(q).length)
                queryAdd = '/?' + new URLSearchParams(q).toString()
        }
    }

    return (
        <Pagination className="mt-3">
            <Link href={`${base}${queryAdd}`} passHref>
                <Pagination.First
                    disabled={page === 1}
                />
            </Link>
            <Link href={
                page === 2
                    ? `${base}${queryAdd}`
                    : `${base}/${page - 1}${queryAdd}`
            } passHref>
                <Pagination.Prev
                    disabled={page === 1}
                />
            </Link>
            <Pagination.Item>
                {page} of {pages}
            </Pagination.Item>
            <Link href={`${base}/${page + 1}${queryAdd}`} passHref>
                <Pagination.Next
                    disabled={page === pages}
                />
            </Link>
            <Link href={`${base}/${pages}${queryAdd}`} passHref>
                <Pagination.Last
                    disabled={page === pages}
                />
            </Link>
        </Pagination>
    )
}