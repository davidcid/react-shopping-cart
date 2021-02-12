import styled from 'styled-components';

export const Wrapper = styled.div`
    background: black;
    color: white;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    margin-top: auto;

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .footer-p {
        text-align: right;
    }

    .footer-social {
        display: flex;
        justify-content: flex-end;
  
        .footer-social-element {
          list-style: none;
          margin-top: 1rem;
          margin-left: 1rem;
          transition: all 0.4s ease;
          font-size: 1.2rem;

          a {
              color: white;
          }
  
          &:hover {
            transform: translateY(-0.5rem);
          }
        }
      }
`