import styled from 'styled-components'

export const Container = styled.div`
     background: #4682b4;
    .pages > div{
      display: inline-block;
      padding: 5px;
      width: 20px;
    }  
      .selectedPage{
    font-weight: bold;
  } 
`

export const ContainerUsers = styled.div`
  background-color: #4682b4;
  margin: 0;
  display: grid;
  grid-gap: 10px;
  padding: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  .img {
    width: 80px;
  }
    .left{
    grid-area: left;
    border-right: 1px solid black;
  }
  .right{
    grid-area: right;
  }
  .right > div{
    padding-top: 15px;
  }
  .user{
    padding: 10px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
  }
`