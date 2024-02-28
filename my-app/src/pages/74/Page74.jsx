import React, { useState } from "react";
import { Center74, Frame74, Input74, Label74, Pagination74 } from "./Page74.styled";

const Page74 = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Frame74>
            <Center74>
                <Pagination74>
                    {[1, 2, 3, 4].map((page) => (
                        <>
                            <Input74
                              type="radio"
                              id={`page-${page}`}
                              name="page"
                              checked={currentPage === page}
                              onChange={() => handlePageChange}
                            />
                            <Label74 htmlFor={`page-${page}`}>{page}</Label74>
                        </>
                    ))}
                </Pagination74>
            </Center74>
        </Frame74>
    );
};

export default Page74;