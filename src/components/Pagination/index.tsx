import React from "react";
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
        showTotal= "true",
        showQuickJumper = "true",
        showSizeChanger = "true",
        onChange,
    } : PropsEntity = props;
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
                showTotal={total => showTotal === "true" ? `共 ${total} 条` : false}
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
    showTotal?: "true" | "false",
    showQuickJumper?: "true" | "false",
    showSizeChanger?: "true" | "false",
    onChange: (page: number, pageSize: number) => void,
}

export default HomePagination
