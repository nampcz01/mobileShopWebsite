import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card'; // Import as MuiCard
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

import styles from './CardItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles) 
const productsURL = "http://localhost:9000/api/products";

function CardMui() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(productsURL).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.productId} item xs={2} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.productId}`} className={styles.cardLink}>
              <MuiCard className={cx('productCard')}> 
                <CardMedia
                  component="img"
                  
                  image="https://storage.googleapis.com/my-image-products/iphone-xi-den-600x600.jpg"
                  alt={product.name}
                />
                <CardContent className={styles.Card}>
                  <Typography variant="h6" component="div" className={styles.nameItem}>
                    {product.name}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={1} className={styles.maf}>
                    <Rating
                      name="product-rating"
                      value={5}
                      readOnly
                      max={5}
                      size="small"
                      className={styles.rating}
                    />
                    <span>NSX: {product.manufacturer}</span>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1} className={styles.price}>
                    <span className={cx('price')}>{product.prize?.toLocaleString()} VNĐ</span>
                    <span>-{product.promotion || 0}%</span>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {(product.prize - product.prize * (product.promotion / 100))?.toLocaleString()} VNĐ
                  </Typography>
                </CardContent>
              </MuiCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardMui;
