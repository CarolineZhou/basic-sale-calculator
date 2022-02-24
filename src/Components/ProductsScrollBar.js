import * as React from 'react';
import styled from 'styled-components';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import itemsData from '../Data/ItemsData';

const ProductsScrollBar = (props) => {
  const ListScrollStyle = {
    width: 500,
    height: 400,
  };

  return (
    <GridScroll>
      <ImageList rowHeight={180} style={ListScrollStyle}>
        <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader component='div'>Products</ListSubheader>
        </ImageListItem>
        {itemsData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '15px 15px 0px 0px',
              }}
            />
            <ImageListItemBar
              title={item.title}
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              actionIcon={
                <IconButton
                  aria-label={`add ${item.title}`}
                  style={{ marginRight: '10px', color: 'white' }}
                  onClick={() =>
                    props.addQuantityOfOne(
                      item.title,
                      item.category,
                      item.hasTax,
                      item.price
                    )
                  }
                >
                  <AddCircleOutlineRoundedIcon />
                </IconButton>
              }
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </GridScroll>
  );
};

const GridScroll = styled.div`
  background-color: lightGrey;
  width: 45%;
  height: 80%;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

export default ProductsScrollBar;
