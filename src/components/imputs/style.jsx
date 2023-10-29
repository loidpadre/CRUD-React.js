import { styled } from "styled-components"
export const Wrapper = styled.div`
    button{
            border: none;
            background-color: #fff;
            padding: 5px;
            margin-bottom: 10px;
            cursor: pointer;
            &:hover{
                background-color: orange;
                color: #fff;
            }

        }
    .pesquisar{
        padding: 8px;
        width: 94%;
        }
    form{
        
        input{
            width: 94%;
            padding: 10px;
            border: none;
            margin-bottom: 5px;
            margin-right: 20px;
        }
        
        
    }
    .list{
            border-bottom: 1px #fff solid;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            justify-items: center;
            margin-top: 20px;
            .task{
                line-height: 5px;
                h3{
                    font-size: 16px;
                    font-weight: bolde;
                }
                color: #fff;
                
            }
            .delete{
                margin-right: 5px;
                &:hover{
                    background-color: red;
                }
            }
            .btn{
                display: flex;
            }
        }
        
`