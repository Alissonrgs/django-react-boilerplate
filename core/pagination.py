from rest_framework.utils.urls import replace_query_param
from rest_framework.pagination import PageNumberPagination as RFPagePagination
from rest_framework.views import Response
from rest_framework.settings import api_settings

from collections import OrderedDict


class PageNumberPagination(RFPagePagination):
    """
    Adds extra attributes to response, useful for building
    pagination widgets with range.
    """
    max_page_size = getattr(api_settings, 'MAX_PAGE_SIZE', 100)
    page_size_query_param = 'page_size'

    def get_first_link(self):
        if not self.page.has_previous():
            return None

        url = self.request.build_absolute_uri()
        return replace_query_param(url, self.page_query_param, '1')

    def get_last_link(self):
        if not self.page.has_next():
            return None

        url = self.request.build_absolute_uri()
        return replace_query_param(url, self.page_query_param, 'last')

    def current_page(self):
        return self.request.query_params.get(self.page_query_param, 1)

    def next_page_number(self):
        return self.page.next_page_number() \
            if self.page.has_next() else None

    def prev_page_number(self):
        return self.page.previous_page_number() \
            if self.page.has_previous() else None

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('num_pages', self.page.paginator.num_pages),
            ('count', self.page.paginator.count),
            ('previous', self.prev_page_number()),
            ('has_prev', self.page.has_previous()),
            ('next', self.next_page_number()),
            ('has_next', self.page.has_next()),
            ('results', data),
            ('last', 'last'),
            ('first', 1),
            ('page_number', self.current_page()),
            ('page_size', self.page_size)
        ]))
