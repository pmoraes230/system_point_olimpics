from django.shortcuts import redirect, render
from mysqlx import View
from django.core.files.storage import FileSystemStorage
from system_point_olimpics_app.models import Users, Ocupations

# Create your views here.
from django.shortcuts import render, redirect
from .models import Users, Ocupations

def cadastrar_usuario(request):
    if request.method == "POST":
        name = request.POST.get("name")
        surname = request.POST.get("surname")
        phone = request.POST.get("phone")
        date_of_birth = request.POST.get("date_of_birth")
        email = request.POST.get("email")
        image = request.FILES.get("image")
        ocupation_id = request.POST.get("ocupations")  # ID da ocupação selecionada

        try:
            ocupation = Ocupations.objects.get(id=ocupation_id)  # Busca a ocupação no banco
            user = Users.objects.create(
                name=name,
                surname=surname,
                phone=phone,
                date_of_birth=date_of_birth,
                email=email,
                image=image,
                ocupations=ocupation  # Define a FK corretamente
            )

            return redirect("point_eletronic/")  # Redireciona para uma página de sucesso

        except Ocupations.DoesNotExist:
            return render(request, "register.html", {
                "error": "Ocupação inválida, tente novamente.",
                "ocupations": Ocupations.objects.all()  # Para manter o dropdown funcionando
            })

    # Passamos a lista de ocupações para o formulário
    ocupations = Ocupations.objects.all()
    return render(request, "register.html", {"ocupations": ocupations})

def register_system(request):
    return render(request, "point_register.html")

