select * from accounts.tenant
select * from accounts.tenant_user
select * from accounts.user_account


select * from tenant_HOSPITAl_Z.customers

select * 
from accounts.user_account ua
join accounts.tenant_user tu
on ua.id = tu.fk_user
join accounts.tenant ten
on  ten.id = tu.fk_tenant

DELETE FROM accounts.tenant_user where fk_tenant = 16
DELETE FROM accounts.tenant where id = 16
DELETE FROM accounts.user_account where full_name = 'Mehul Saxena'