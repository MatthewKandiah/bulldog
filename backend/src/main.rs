use actix_web::web;
use actix_web::App;
use actix_web::HttpResponse;
use actix_web::HttpServer;
use actix_web::Responder;

async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

async fn hey() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(hello))
            .route("/hey", web::get().to(hey))
            .service(actix_files::Files::new("/static", "../sources").show_files_listing())
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
