# MorphTo field with dependency support for Nova

This package adds extra parameters to the request used by the MorphTo fields
to fetch the options. The extra parameters are the selected values of other
fields so they can be used to filter the options based on selections in other
fields. The extra parameters are only passed when using a MorphTo field that
is searchable.

## Installation

You can install this package on a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require appelit/laravel-nova-morphto-dependency
```

## Usage

Make sure the fields of which the values should be filtered based on selections
of other fields are `->searchable()`.

```php
return [
    ...
    MorphTo::make('Company'),
    MorphTo::make('Employee')
    ->searchable(),
    ...
];
```

Then on the Employee resource, in this case, use the extra fields to filter the
correct employees as follows:

```php
public static function relatableQuery(NovaRequest $request, $query)
{
    $query->where('company_id', '=', $request->selectedCompany);
    return $query;
}
```

## License

The MIT License (MIT). Please see License File for more information.
