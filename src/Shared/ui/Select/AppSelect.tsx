import React, {FC} from 'react';
import classes from "../../../Pages/MainPage/ui/MainPage.module.css";
import {ICategory} from "../../../Entities/Product";
import {Select} from "antd";

interface SelectProps {
    onChange: (value: string) => void
}

const AppSelect: FC<SelectProps> = ({onChange}) => {
    return (
        <Select
            className={classes.select}
            showSearch
            placeholder="Select a category"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
                {
                    value: ICategory.JEWELLERY,
                    label: 'Jewellery',
                },
                {
                    value: ICategory.ELECTRONICS,
                    label: 'Electronics',
                },
                {
                    value: ICategory.MEN_S_CLOTHING,
                    label: "Men's clothing",
                },
                {
                    value: ICategory.WOMEN_S_CLOTHING,
                    label: "Women's clothing",
                },
                {
                    value: 'all',
                    label: "All categories",
                },
            ]}
        />
    );
};

export default AppSelect;