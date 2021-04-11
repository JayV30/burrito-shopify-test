import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './store.module.sass';

const Store = ({ topPadding, path }) => {

  useEffect(() => {
    if (window.ShopifyBuy) {

      const client = window.ShopifyBuy.buildClient({
        domain: 'burrito-test.myshopify.com',
        storefrontAccessToken: 'b6c57e2eae83d37789f026ed6f0f27c0'
      });

      const ui = window.ShopifyBuy.UI.init(client);

      ui.createComponent('collection', {
        id: '265516843172',
        node: document.getElementById('front-page-product-collection'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                  "width": "calc(25% - 20px)"
                }
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {}
        },
      });
    }
  }, []);

  return (
    <motion.div
      key={path}
      id={styles.storePage}
      className="page content container is-fluid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut'}}
    >
      <div className={styles.contentWrapper} style={{paddingTop: `${topPadding}px`}}>
        <div className={`box ${styles.storeBox}`}>
          <h2>BurritoArt Online Store</h2>
          <p>Purchase products directly from the artist using our safe, secure, online store. Shop confidently knowing that all transactions are secure and your information will never be shared with any third parties.</p>
          <div id="front-page-product-collection"></div>
        </div>
      </div>
    </motion.div>
  )
};

export default Store;