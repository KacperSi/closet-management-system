from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

	def save_user(self, request, user, form, commit=False):
		user = super().save_user(request, user, form, commit)
		data = form.cleaned_data
		user.location = data.get('location')
		user.save()
		return user