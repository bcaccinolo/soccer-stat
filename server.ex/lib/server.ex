defmodule Server do
  use Plug.Router

  plug :match
  plug :dispatch


  get "/team/" do
    IO.puts "coucou le monde"
    send_resp(conn, 200, "World")
  end

  match _ do
    send_resp(conn, 404, "oops")
  end

end
