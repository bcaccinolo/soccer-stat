defmodule Server do
  use Plug.Router

  plug Plug.Logger, log: :debug
  plug :match
  plug :dispatch

  get "/team/:championship" do
    case File.read("data/#{championship}.json") do
      {:ok, content} -> put_resp_header(conn, "content-type", "application/json" ) |> send_resp(200, content)
      _              -> send_resp(conn, 404, "championship does not exist")
    end
  end

  match _ do
    send_resp(conn, 404, "oops")
  end

end
