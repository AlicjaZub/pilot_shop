fetch('products.json')
    .then (response =>{
        response.json()
            .then (data => {
                const source = document.querySelector('#product').innerHTML

                const template = Handlebars.compile(source)

                data.products.forEach(product =>{
                    product.hasDiscount = (product.originalPrice !== product.price)
                    product.originalPrice = product.originalPrice.toFixed(2)
                    product.price = product.price.toFixed(2)
                })

                const target = document.querySelector('.product-container')
                target.innerHTML = template(data)
            })
    })

