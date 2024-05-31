import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 60 px;
    background-color: #000000;
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

        .logo{
            flex: 1;

            img{
                width: 30px;
            }
        }

        nav{

            ul{
               display: flex; 
            }
                li{
                    list-style: none;
                    margin-left: 20px;
                }

        }
`;
