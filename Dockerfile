FROM python:3.11-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates git && rm -rf /var/lib/apt/lists/*
COPY . /app
RUN if [ -f requirements.txt ]; then pip install --no-cache-dir -r requirements.txt; fi
RUN pip install --no-cache-dir aiohttp google-cloud-bigquery google-cloud-pubsub google-cloud-secret-manager google-cloud-storage google-auth httpx structlog
ENV PORT=8080
EXPOSE 8080
CMD ["python", "-m", "server.main"]
