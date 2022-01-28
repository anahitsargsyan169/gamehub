import { useState } from "react";
import { User } from "./pages/LeaderBoard/User";
import styles from "./Pagination.module.css";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

function Pagination({ data, game, pageLimit, dataLimit }) {
    const [pages] = useState(Math.ceil(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, index) => start + index + 1);
    };

    return (
        <>

            {getPaginatedData().map((user) => (
                <User game={game} key={user.id} user={user} />
            ))}
        <div className={styles.pagination}>

            <button
            onClick={goToPreviousPage}
            className={`${styles.prev} ${currentPage === 1 ? `${styles.disabled}` : ''}`}
            >
            <AiOutlineArrowLeft className={styles.arrow_icon}/>
            </button>

            {getPaginationGroup().map((item, index) => (
            <button
                key={index}
                onClick={changePage}
                className={`${styles.paginationItem} ${currentPage === item ? `${styles.active}` : null}`}
            >
                <span>{item}</span>
            </button>
            ))}

            <button
            onClick={goToNextPage}
            className={`${styles.next} ${currentPage === pages ? `${styles.disabled}`  : ""}`}
            >
            <AiOutlineArrowRight className={styles.arrow_icon}/>
            </button>
        </div>
        </>
    );
}

export default Pagination;