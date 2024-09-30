FROM python:3.13-alpine
WORKDIR /usr/src/app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN pip install --upgarde pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
#RUN python manage.py collectstatic --noinput
# RUN pip install --no-cache-dir -r requirements.txt. #Install dependencies without cache for smaller image size. Recommended for production. 
COPY . .