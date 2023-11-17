# OnlineStore

OnlineStore displays all the products in the home page with search field. User can click on any of the product to see more detailed information about the product. Also, users can search for any particular product by simply providing the category name on the search input field.

## How to install

1. Clone the project `git clone https://github.com/ShivaAdhikari7/online-store`.

2. Install all the dependencies `npm install` or `npm i`.

3. Run the project `npm start`.

After these steps, the localhost server on port 3000 will start - [localhost](http://localhost:3000).

## How to use

After [localhost](http://localhost:3000) is started by the React development server, the home page should look like below:

![OnlineStore Home Page](/src/img_markdown/home_page.jpg)

Now, you can search for the product by category using search input field. I have searched for Electronics category products:
![Electronics in search input field](/src/img_markdown/product_search.jpg)

Also, you can view the details of certain product by clicking on it.
![Product detail page](/src/img_markdown/product_detail.jpg)

There is also add to cart functionality. I have added certain products to the add in below screenshot:
![Cart page](/src/img_markdown/add_to_cart_page.jpg)

## Responsiveness

**Responsive home page:**

![Responsive home page](/src/img_markdown/responsive_home.jpg)

**Responsive detail page:**

![Responsive detail page](/src/img_markdown/responsive_detail.jpg)

**Responsive cart page:**
![Responsive cart page](/src/img_markdown/responsive_cart.jpg)

## What have I used

1. As frontend library, I have used [React](https://reactjs.org/).
2. For getting the product data, I have used [Fake Store API](https://fakestoreapi.com/).
3. For routing, I have used [react-router-dom](https://reactrouter.com/en/main).
4. As CSS Pre-processor, I have used [SASS](https://sass-lang.com/).
5. For global state management, I have used [Redux](https://redux.js.org/) with `redux-toolkit`.
6. For react binding, I have used [React Redux](https://react-redux.js.org/).
7. For toaster, I have used [React Toastify](https://www.npmjs.com/package/react-toastify).
