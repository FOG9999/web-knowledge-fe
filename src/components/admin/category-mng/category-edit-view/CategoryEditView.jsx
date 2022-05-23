import PropTypes from 'prop-types'
import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { CategoryService } from '../../../../apis/CategoryService';
import { Category } from '../../../models/Category';

const CategoryEditView = ({}) => {
    const [category, setCategory] = useState({});

    const {id} = useParams();
    let loading = useSelector(state => state.loading.loading);

    useEffect(() => {
        if(id){
            CategoryService.getCategory(id).then(cate => {
                setCategory(cate);
            })
        }        
        else {
            setCategory(new Category(''));
        }
    }, [])

    return (
        <Card></Card>
    )
}

CategoryEditView.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export {CategoryEditView}

