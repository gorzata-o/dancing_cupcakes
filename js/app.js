var cat = $(".cat-muffin");

cat.on("click", function(event){
    cat.addClass("shake infinite");
});
cat.on("mouseout", function(event){
    cat.removeClass("shake infinite");
});