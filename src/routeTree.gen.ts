/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as ActionImport } from './routes/$action'
import { Route as IndexImport } from './routes/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as BlogBlognameImport } from './routes/blog/$blog_name'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const ActionRoute = ActionImport.update({
  id: '/$action',
  path: '/$action',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog/index.lazy').then((d) => d.Route))

const BlogBlognameRoute = BlogBlognameImport.update({
  id: '/blog/$blog_name',
  path: '/blog/$blog_name',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$action': {
      id: '/$action'
      path: '/$action'
      fullPath: '/$action'
      preLoaderRoute: typeof ActionImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blog_name': {
      id: '/blog/$blog_name'
      path: '/blog/$blog_name'
      fullPath: '/blog/$blog_name'
      preLoaderRoute: typeof BlogBlognameImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$action': typeof ActionRoute
  '/about': typeof AboutRoute
  '/blog/$blog_name': typeof BlogBlognameRoute
  '/blog': typeof BlogIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$action': typeof ActionRoute
  '/about': typeof AboutRoute
  '/blog/$blog_name': typeof BlogBlognameRoute
  '/blog': typeof BlogIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$action': typeof ActionRoute
  '/about': typeof AboutRoute
  '/blog/$blog_name': typeof BlogBlognameRoute
  '/blog/': typeof BlogIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$action' | '/about' | '/blog/$blog_name' | '/blog'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$action' | '/about' | '/blog/$blog_name' | '/blog'
  id: '__root__' | '/' | '/$action' | '/about' | '/blog/$blog_name' | '/blog/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ActionRoute: typeof ActionRoute
  AboutRoute: typeof AboutRoute
  BlogBlognameRoute: typeof BlogBlognameRoute
  BlogIndexRoute: typeof BlogIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ActionRoute: ActionRoute,
  AboutRoute: AboutRoute,
  BlogBlognameRoute: BlogBlognameRoute,
  BlogIndexRoute: BlogIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$action",
        "/about",
        "/blog/$blog_name",
        "/blog/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$action": {
      "filePath": "$action.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/blog/$blog_name": {
      "filePath": "blog/$blog_name.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
