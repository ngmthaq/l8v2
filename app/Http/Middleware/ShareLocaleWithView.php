<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;
use stdClass;

class ShareLocaleWithView
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        View::share(
            'translations',
            collect(File::allFiles(resource_path('lang/' . App::getLocale())))
                ->flatMap(
                    function ($file) {
                        return [
                            ($translation = $file->getBasename('.php')) => trans($translation),
                        ];
                    }
                )->toJson()
        );

        if (file_exists($json = resource_path('lang/' . App::getLocale() . '.json'))) {
            View::share('translationJsons', File::get($json));
        } else {
            View::share('translationJsons', json_encode(new stdClass()));
        }

        return $next($request);
    }
}
