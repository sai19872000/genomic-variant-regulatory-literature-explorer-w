import aiohttp
from aiohttp import web

async def handle_clinvar(request):
    """Stub API route for ClinVar integration."""
    return web.json_response({"status": "not implemented", "source": "clinvar"})

async def handle_gnomad(request):
    """Stub API route for gnomAD integration."""
    return web.json_response({"status": "not implemented", "source": "gnomad"})

async def handle_gemini(request):
    """Stub API route for Gemini integration."""
    return web.json_response({"status": "not implemented", "source": "gemini"})

def init_app():
    app = web.Application()
    
    # Setup routes
    app.router.add_get('/api/clinvar', handle_clinvar)
    app.router.add_get('/api/gnomad', handle_gnomad)
    app.router.add_post('/api/gemini', handle_gemini)  # Gemini is typically a POST, but GET is fine for stub, let's stick to GET or both
    
    return app

if __name__ == '__main__':
    app = init_app()
    web.run_app(app, port=8080)
