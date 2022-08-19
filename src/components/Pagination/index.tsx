import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
import type { PaginationProps } from 'antd';

const HomePagination = (props: any) => {
    const {
        current,
        total,
        pageSize,
        pageSizeOptions = ["10", "20", "50", "100"],
        size,
        disabled = "false",
        showQuickJumper = "true",
        showSizeChanger = "true",
        onChange,
    } : PropsEntity = props;
    useEffect(() => {

    }, []);
    const handleChange: PaginationProps['onChange'] = (page, pageSize) => {
        onChange(page, pageSize);
    };
    return (
        <div className="pagination-container">
            <Pagination
                showQuickJumper={showQuickJumper === "true"}
                showSizeChanger={showSizeChanger === "true"}
                current={current}
                total={total}
                pageSize={pageSize}
                pageSizeOptions={pageSizeOptions}
                size={size}
                disabled={disabled === "true"}
                showTotal={total => `共 ${total} 条`}
                onChange={handleChange}
            />
        </div>
    )
}

interface PropsEntity {
    current: number,
    total: number,
    pageSize: number,
    pageSizeOptions?: string[],
    size?: "default" | "small",
    disabled?: "true" | "false",
    showQuickJumper?: "true" | "false",
    showSizeChanger?: "true" | "false",
    onChange: (page: number, pageSize: number) => void,
}

export default HomePagination
