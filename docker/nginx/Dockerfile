FROM nginx:stable as prod
# INFO: certs MUST BE overridden by -v. Waiting for domain
RUN mkdir /frontend/
ADD etc/nginx/*.template /build/
RUN envsubst < /build/prod.template > /etc/nginx/conf.d/default.conf
ADD dist /frontend/
