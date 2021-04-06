from .models import Category,Product
from django.http import JsonResponse,HttpResponse

# Create your views here
def show_products(requests):
    products = list(Product.objects.values())
    return JsonResponse(products,safe=False)

def show_product(requests,pid):
    try:
        product = list(Product.objects.filter(id=pid).values())
        return JsonResponse(product,safe=False)
    except:
        return HttpResponse("NOT FOUND")


def show_categories(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories,safe=False)

####LAB8
def show_category(request,pid):
    try:
        category = list(Category.objects.filter(id=pid).values())
        return JsonResponse(category,safe=False)
    except:
        return HttpResponse("NOT FOUND")
