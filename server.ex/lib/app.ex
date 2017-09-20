defmodule App do
    
    use Application
    require Logger

    def start(_type, _args) do
        children = [
            Plug.Adapters.Cowboy.child_spec(:http, Server, [], port: 8080 )
        ]
        Logger.info "Launching App"
        Supervisor.start_link(children, strategy: :one_for_one)
    end
end
