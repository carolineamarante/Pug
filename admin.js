const path = require('path')
const express = require('express')

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')


app.use(express.static(path.join(__dirname, 'public')))


app.use((req, res, next) => {
    res.status('404', {pageTitle: '404 PAGE NOT FOUND'})

})

app.use('/page-content', adminData.routes);


app.listen(4500);