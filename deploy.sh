docker build -t pancasutresna/multi-client:latest -t pancasutresna/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t pancasutresna/multi-server:latest -t pancasutresna/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t pancasutresna/multi-worker:latest -t pancasutresna/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push pancasutresna/multi-client:latest
docker push pancasutresna/multi-server:latest
docker push pancasutresna/multi-worker:latest

docker push pancasutresna/multi-client:$SHA
docker push pancasutresna/multi-server:$SHA
docker push pancasutresna/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=pancasutresna/multi-server:$SHA
kubectl set image deployments/client-deployment client=pancasutresna/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=pancasutresna/multi-worker:$SHA