PROJECT := project_name

clean:
	./manage.py clean_pyc

superuser:
	./manage.py createsuperuser

runserver:
	./manage.py runserver

shell:
	./manage.py shell_plus

shell-sql:
	./manage.py shell_plus --print-sql

urls:
	./manage.py show_urls

test:
	./manage.py test

migrate:
	./manage.py migrate

migrations:
	./manage.py makemigrations

showmigrations:
	./manage.py showmigrations

messages:
	./manage.py makemessages -a --no-obsolete -v 3 --ignore="front/*"

messages-js:
	./manage.py makemessages --domain djangojs --no-obsolete -v 3 --language Python --ignore="statics/*" --ignore="front/node_modules/*" --ignore="front/dist/*"

compilemessages:
	./manage.py compilemessages
